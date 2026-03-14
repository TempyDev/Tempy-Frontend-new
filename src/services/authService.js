const API_BASE_URL = "http://127.0.0.1:8000";

const authService = {
  // Step 1: Send full name and email to get OTP
  requestSignup: async (fullName, email) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/signup/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: fullName,
          email: email,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to request signup");
      }

      return await response.json();
    } catch (error) {
      throw new Error(error.message || "Network error");
    }
  },

  // Step 2: Verify OTP and set password to complete signup
  verifySignup: async (signupId, otp, password, fullName, email) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/signup/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          signup_id: signupId,
          otp: otp,
          password: password,
          full_name: fullName,
          email: email,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to verify signup");
      }

      return await response.json();
    } catch (error) {
      throw new Error(error.message || "Network error");
    }
  },

  // Login
  login: async (email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/token/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to login");
      }

      return await response.json();
    } catch (error) {
      throw new Error(error.message || "Network error");
    }
  },
};

export default authService;
