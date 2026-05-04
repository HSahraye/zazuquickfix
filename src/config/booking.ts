export const BOOKING_LINKS = {
  quickWash: "https://calendly.com/sahrayehamid/quick-wash",
  fullDetail: "https://calendly.com/sahrayehamid/full-detail",
  deepReset: "https://calendly.com/sahrayehamid/deep-reset",
};

export const BOOKING_QUERY_TO_LINK = {
  "quick-wash": BOOKING_LINKS.quickWash,
  "full-detail": BOOKING_LINKS.fullDetail,
  "deep-reset": BOOKING_LINKS.deepReset,
} as const;

export const DEFAULT_BOOKING_QUERY = "full-detail";

export const PHONE_NUMBER_DISPLAY = "+1 (510) 978-6055";
export const PHONE_NUMBER_TEL = "tel:+15109786055";
export const PHONE_NUMBER_SMS = "sms:+15109786055";
