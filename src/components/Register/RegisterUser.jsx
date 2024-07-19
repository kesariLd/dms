
import { useState } from 'react';
import PropTypes from 'prop-types';

const InputField = ({ id, name, type, placeholder, autoComplete, required, maxLength, onInput, className }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const [mainPlaceholder, optionalText] = placeholder.split(' (');

  return (
    <div className={`relative ${className}`}>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        maxLength={maxLength}
        onInput={onInput}
        className={`peer block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
          isFocused || hasValue ? 'pt-4' : ''
        }`}
        placeholder={mainPlaceholder}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(e.target.value !== '');
        }}
        onChange={(e) => setHasValue(e.target.value !== '')}
      />
      <label
        htmlFor={id}
        className={`absolute left-3 transition-all duration-200 ease-in-out ${
          isFocused || hasValue
            ? 'top-0 text-xs text-blue-600'
            : 'top-2 text-sm text-gray-500'
        }`}
      >
        {mainPlaceholder}
        {optionalText && (
          <span className="text-xs text-gray-400 ml-1">({optionalText}</span>
        )}
      </label>
    </div>
  );
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  autoComplete: PropTypes.string.isRequired,
  required: PropTypes.bool,
  maxLength: PropTypes.string,
  onInput: PropTypes.func,
  className: PropTypes.string,
};

const RegisterUser = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-2 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-900">
          Create an Account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Register to access your dashboard.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 sm:px-6 shadow-md rounded-lg">
          <form className="space-y-6">
            <InputField
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              autoComplete="name"
              required
            />

            <InputField
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              required
            />

            <InputField
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="new-password"
              required
            />

            <InputField
              id="contact"
              name="contact"
              type="tel"
              placeholder="Contact Number"
              autoComplete="tel"
              maxLength="10"
              minLength="10"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
                if (e.target.value.length < 10) {
                  e.target.setCustomValidity("Please enter a valid contact number");
                } else {
                  e.target.setCustomValidity("");
                }
              }}
              required
            />

            <InputField
              id="role"
              name="role"
              type="text"
              placeholder="Role"
              autoComplete="role"
              required
            />

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <InputField
                id="organization"
                name="organization"
                type="text"
                placeholder="Organization (Optional)"
                autoComplete="organization"
                className="flex-1"
              />

              <InputField
                id="location"
                name="location"
                type="text"
                placeholder="Location (Optional)"
                autoComplete="address"
                className="flex-1"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-md text-sm font-medium text-white bg-blue-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;