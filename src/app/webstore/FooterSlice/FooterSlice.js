import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  FooterLinks: [
    [
      "Quick Links",
      "Ph.D Admission",
      "UG & PG Admission 2025",
      "Vocational Education",
      "Pharmacy",
      "Document Verification",
      "Ph.D Admission",
      "UG & PG Admission 2025",
      "Vocational Education",
      "Pharmacy",
      "Document Verification",
      "Ph.D Admission",
      "UG & PG Admission 2025",
    ],
    [
      "Helpful Links",
      "Admission Policy",
      "Cancel & Fee Resfund Policy",
      "Holiday list",
      "ILP-Inner Line Permit",
      "Anti-Ragging",
      "Anti-Ragging Helpline",
      "Career@AIU",
      "Document Verification",
      "Student Speak",
      "Pharmacy",
      "Document Verification",
    ],
    ["Important Links", "UGC", "AICTE", "PCI", "NCTE", "BCI", "AYUSH", "CCIM"],
  ],
};

const FooterSlice = createSlice({
  name: "footer",
  initialState,
});

export default FooterSlice.reducer;
