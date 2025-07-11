import axios from "axios";

const api = axios.create({
  baseURL: "https://dev-api.netmeddoraa.com",
});

export const getVenue = () => {
  return api.get("/getvenue", {
    headers: {
      "x-api-key": "1234",
      "Content-Type": "application/json",
    },
  });
};

export const getTimeSlot = (venue, sport, device_id) => {
  return api.get("/gettimeslots", {
    params: {
      venue,
      sport,
      device_id,
    },
    headers: {
      "x-api-key": "1234",
      "Content-Type": "application/json",
    },
  });
};

export const getCourts = (date, time, venue) => {
  return api.get("/getcourt", {
    params: {
      date,
      time,
      venue,
    },
    headers: {
      "x-api-key": "1234",
      "Content-Type": "application/json",
    },
  });
};

export const LoginAPI = (mobile, password, deviceId) => {
  return api.post(
    "/login",
    {
      username: mobile,
      password: password,
      device_id: deviceId,
    },
    {
      headers: {
        "x-api-key": "1234",
        "Content-Type": "application/json",
      },
    }
  );
};

export const ForgetPasswordAPI = (mobile) => {
  return api.post(
    "/forgotpassword",
    {
      user: mobile,
    },
    {
      headers: {
        "x-api-key": "1234",
        "Content-Type": "application/json",
      },
    }
  );
};

export const ForgetVerificationAPI = (user, otp) => {
  return api.post(
    "/forgotverification",
    {
      user: user,
      code: otp,
    },
    {
      headers: {
        "x-api-key": "1234",
        "Content-Type": "application/json",
      },
    }
  );
};

export const SignUpAPI = (formData) => {
  return api.post(
    "/register",
    {
      full_name: formData.fullName,
      email: formData.email,
      phone_no: formData.phone,
      gender: formData.gender,
      dob: formData.dob,
      password: formData.password,
    },
    {
      headers: {
        "x-api-key": "1234",
        "Content-Type": "application/json",
      },
    }
  );
};

export const OtpAPI = (user, otp) => {
  return api.post(
    "/otp",
    {
      user: user,
      mobile_code: otp,
    },
    {
      headers: {
        "x-api-key": "1234",
        "Content-Type": "application/json",
      },
    }
  );
};

export const resendOtpAPI = (user) => {
  return api.post(
    "/resendotp",
    {
      user: user,
    },
    {
      headers: {
        "x-api-key": "1234",
        "Content-Type": "application/json",
      },
    }
  );
};

export const resetPasswordAPI = (password, userId) => {
  return api.post(
    "/resetpassword",
    {
      password: password,
      id: userId,
    },
    {
      headers: {
        "x-api-key": "1234",
        "Content-Type": "application/json",
      },
    }
  );
};

export const getCustomerInfoAPI = (token) => {
  return api.get("/user/getcustomerinfo", {
    headers: {
      "x-api-key": "1234",
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};

export const profileAPI = (formData, token) => {
  return api.post(
    "/user/profile",
    {
      full_name: formData.fullName,
      email: formData.email,
      gender: formData.gender,
      dob: formData.dob,
    },
    {
      headers: {
        "x-api-key": "1234",
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
};

export const profileImageAPI = (image, token) => {
  return api.post(
    "/user/profile",
    {
      image: image,
    },
    {
      headers: {
        "x-api-key": "1234",
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
};

export const changePasswordAPI = (formData, token) => {
  return api.post(
    "/user/changepassword",
    {
      old: formData.oldPassword,
      password: formData.newPassword,
      cpassword: formData.confirmPassword,
    },
    {
      headers: {
        "x-api-key": "1234",
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
};

export const getBookingHistoryAPI = (token) => {
  return api.get("/user/getBookingHistory", {
    headers: {
      "x-api-key": "1234",
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};

export const addTimesAPI = (body, token) => {
  return api.post(
    "/user/add_times",
    {
      sport_id: body.sportId,
      venue_id: body.venueId,
      court_id: body.courtId,
      date: body.date,
      time: body.time,
    },
    {
      headers: {
        "x-api-key": "1234",
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
};

export const confirmCashPaymentAPI = (orderid, promo_code, token) => {
  return api.get("/user/confirmCashPayment", {
    params: {
      orderid,
      promo_code,
    },
    headers: {
      "x-api-key": "1234",
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};

export const checkPromoAPI = (orderId, promoCode, amount, token) => {
  return api.post(
    "/user/check_promocode",
    {
      orderid: orderId,
      promo_code: promoCode,
      total_amount: amount,
    },
    {
      headers: {
        "x-api-key": "1234",
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
};

export const resetCurrentPaymentAPI = (token) => {
  return api.get("/user/reset_current_order", {
    headers: {
      "x-api-key": "1234",
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};

export const addCancellation = (date, time, orderId, token) => {
  return api.post(
    "/user/addCancellation",
    {
      date: date,
      time: time,
      order_id: orderId,
    },
    {
      headers: {
        "x-api-key": "1234",
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
};
