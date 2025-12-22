"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { supabase } from "@/app/lib/supabase";
import Navbar from "@/app/components/Navbar";
import { useRouter } from "next/navigation";

type FormState = {
  Name: string;
  Email: string;
  Phone: string;
  Company: string;
  Role: string;
  Message: string;
};

const countryCodes = [
  { code: "+1", name: "US" },
  { code: "+1", name: "Canada" },
  { code: "+7", name: "Russia" },
  { code: "+20", name: "Egypt" },
  { code: "+27", name: "South Africa" },
  { code: "+30", name: "Greece" },
  { code: "+31", name: "Netherlands" },
  { code: "+32", name: "Belgium" },
  { code: "+33", name: "France" },
  { code: "+34", name: "Spain" },
  { code: "+36", name: "Hungary" },
  { code: "+39", name: "Italy" },
  { code: "+40", name: "Romania" },
  { code: "+41", name: "Switzerland" },
  { code: "+43", name: "Austria" },
  { code: "+44", name: "UK" },
  { code: "+45", name: "Denmark" },
  { code: "+46", name: "Sweden" },
  { code: "+47", name: "Norway" },
  { code: "+48", name: "Poland" },
  { code: "+49", name: "Germany" },
  { code: "+51", name: "Peru" },
  { code: "+52", name: "Mexico" },
  { code: "+53", name: "Cuba" },
  { code: "+54", name: "Argentina" },
  { code: "+55", name: "Brazil" },
  { code: "+56", name: "Chile" },
  { code: "+57", name: "Colombia" },
  { code: "+58", name: "Venezuela" },
  { code: "+60", name: "Malaysia" },
  { code: "+61", name: "Australia" },
  { code: "+62", name: "Indonesia" },
  { code: "+63", name: "Philippines" },
  { code: "+64", name: "New Zealand" },
  { code: "+65", name: "Singapore" },
  { code: "+66", name: "Thailand" },
  { code: "+81", name: "Japan" },
  { code: "+82", name: "South Korea" },
  { code: "+84", name: "Vietnam" },
  { code: "+86", name: "China" },
  { code: "+90", name: "Turkey" },
  { code: "+91", name: "India" },
  { code: "+92", name: "Pakistan" },
  { code: "+93", name: "Afghanistan" },
  { code: "+94", name: "Sri Lanka" },
  { code: "+95", name: "Myanmar" },
  { code: "+98", name: "Iran" },
];

export default function RequestDemo() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>({
    Name: "",
    Email: "",
    Phone: "",
    Company: "",
    Role: "",
    Message: "",
  });

  const [loading, setLoading] = useState(false);

  const [countryCode, setCountryCode] = useState("+91");

  const fields = [
    { label: "Name", name: "Name", type: "text", required: true },
    { label: "Email", name: "Email", type: "email", required: true },
    { label: "Phone", name: "Phone", type: "tel", required: true },
    { label: "Company", name: "Company", type: "text", required: true },
    { label: "Role", name: "Role", type: "text" },
  ];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const fullForm = { ...form, Phone: countryCode + form.Phone };

      // Save to Supabase
      const { error } = await supabase.from("request_demo").insert([fullForm]);

      if (error) {
        console.error("Supabase error:", error);
        alert(error.message);
        return;
      }

      // Send email
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fullForm),
      });

      alert("Success! We'll get back to you soon.");

      setForm({
        Name: "",
        Email: "",
        Phone: "",
        Company: "",
        Role: "",
        Message: "",
      });
      setCountryCode("+91");
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
<<<<<<< HEAD
    <>
      <div className=' bg-sky-950 text-slate-100 antialiased'>
        <Navbar />
=======
    <div className="relative w-full bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white px-16 overflow-hidden">
      <Navbar />

      <div
        style={{
          maxWidth: "600px",
          margin: "40px auto",
          padding: "0 20px",
        }}
      >
>>>>>>> 682adfe08e1dd75983329f8440acca5c84195f4b
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
            padding: "48px",
            border: "1px solid #f0f0f0",
          }}
        >
          <div
            style={{
              position: "relative",
              marginBottom: "12px",
              textAlign: "center",
            }}
          >
            {/* Back Button */}
            <button
              type='button'
              onClick={() => router.back()}
              className='absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all cursor-pointer text-lg font-semibold'
            >
              ←
            </button>

            {/* Heading */}
            <h1
              style={{
                fontSize: "36px",
                fontWeight: 700,
                color: "#1a202c",
                margin: 0,
              }}
            >
              Request a Demo
            </h1>
          </div>

          <p
            style={{
              textAlign: "center",
              color: "#718096",
              marginBottom: "40px",
            }}
          >
            Fill out the form below and we’ll get back to you soon.
          </p>

          <form onSubmit={handleSubmit}>
            {[
              { label: "Name", name: "Name", type: "text", required: true },
              { label: "Email", name: "Email", type: "email", required: true },
              { label: "Phone", name: "Phone", type: "tel", required: true },
              { label: "Company", name: "Company", type: "text", required: true },
              { label: "Role", name: "Role", type: "text" },
            ].map((field) => (
              <div key={field.name} style={{ marginBottom: "24px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#2d3748",
                    marginBottom: "8px",
                  }}
                >
                  {field.label}
                </label>

                <input
                  type={field.type}
                  name={field.name}
                  value={(form as any)[field.name]}
                  onChange={handleChange}
                  required={field.required}
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    borderRadius: "8px",
                    border: "2px solid #e2e8f0",
                    fontSize: "16px",
                    color: "#1a202c",
                  }}
                />
              </div>
            ))}

<<<<<<< HEAD
              <div style={{ marginBottom: "24px" }}>
                <label
                  htmlFor='Email'
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#2d3748",
                    marginBottom: "8px",
                  }}
                >
                  Email <span style={{ color: "#e53e3e" }}>*</span>
                </label>
                <input
                  type='email'
                  id='Email'
                  name='Email'
                  value={form.Email}
                  onChange={handleChange}
                  required
                  placeholder='you@example.com'
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    fontSize: "16px",
                    border: "2px solid #e2e8f0",
                    borderRadius: "8px",
                    boxSizing: "border-box",
                    transition: "all 0.3s ease",
                    fontFamily: "inherit",
                    outline: "none",
                    color: "#1a202c",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#0070f3";
                    e.target.style.boxShadow =
                      "0 0 0 3px rgba(0, 112, 243, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e2e8f0";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              <div style={{ marginBottom: "24px" }}>
                <label
                  htmlFor='Phone'
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#2d3748",
                    marginBottom: "8px",
                  }}
                >
                  Phone <span style={{ color: "#e53e3e" }}>*</span>
                </label>
                <input
                  type='number'
                  id='Phone'
                  name='Phone'
                  value={form.Phone}
                  onChange={handleChange}
                  required
                  placeholder='+91 00000-00000'
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    fontSize: "16px",
                    border: "2px solid #e2e8f0",
                    borderRadius: "8px",
                    boxSizing: "border-box",
                    transition: "all 0.3s ease",
                    fontFamily: "inherit",
                    outline: "none",
                    color: "#1a202c",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#0070f3";
                    e.target.style.boxShadow =
                      "0 0 0 3px rgba(0, 112, 243, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e2e8f0";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              <div style={{ marginBottom: "24px" }}>
                <label
                  htmlFor='Company'
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#2d3748",
                    marginBottom: "8px",
                  }}
                >
                  Company <span style={{ color: "#e53e3e" }}>*</span>
                </label>
                <input
                  type='text'
                  id='Company'
                  name='Company'
                  value={form.Company}
                  onChange={handleChange}
                  required
                  placeholder='Your company name'
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    fontSize: "16px",
                    border: "2px solid #e2e8f0",
                    borderRadius: "8px",
                    boxSizing: "border-box",
                    transition: "all 0.3s ease",
                    fontFamily: "inherit",
                    outline: "none",
                    color: "#1a202c",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#0070f3";
                    e.target.style.boxShadow =
                      "0 0 0 3px rgba(0, 112, 243, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e2e8f0";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              <div style={{ marginBottom: "24px" }}>
                <label
                  htmlFor='Role'
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#2d3748",
                    marginBottom: "8px",
                  }}
                >
                  Role
                </label>
                <input
                  type='text'
                  id='Role'
                  name='Role'
                  value={form.Role}
                  onChange={handleChange}
                  placeholder='e.g., Product Manager, Developer'
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    fontSize: "16px",
                    border: "2px solid #e2e8f0",
                    borderRadius: "8px",
                    boxSizing: "border-box",
                    transition: "all 0.3s ease",
                    fontFamily: "inherit",
                    outline: "none",
                    color: "#1a202c",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#0070f3";
                    e.target.style.boxShadow =
                      "0 0 0 3px rgba(0, 112, 243, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e2e8f0";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              <div style={{ marginBottom: "32px" }}>
                <label
                  htmlFor='Message'
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#2d3748",
                    marginBottom: "8px",
                  }}
                >
                  Message
                </label>
                <textarea
                  id='Message'
                  name='Message'
                  placeholder='Briefly describe your requirements...'
                  value={form.Message}
                  onChange={handleChange}
                  rows={5}
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    fontSize: "16px",
                    border: "2px solid #e2e8f0",
                    borderRadius: "8px",
                    boxSizing: "border-box",
                    transition: "all 0.3s ease",
                    fontFamily: "inherit",
                    resize: "vertical",
                    outline: "none",
                    lineHeight: "1.6",
                    color: "#1a202c",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#0070f3";
                    e.target.style.boxShadow =
                      "0 0 0 3px rgba(0, 112, 243, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e2e8f0";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              <button
                type='submit'
                disabled={loading}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.currentTarget.style.backgroundColor = "#0056b3";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(0, 112, 243, 0.4)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!loading) {
                    e.currentTarget.style.backgroundColor = "#0070f3";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 8px rgba(0, 112, 243, 0.3)";
                  }
                }}
=======
            <div style={{ marginBottom: "32px" }}>
              <label
>>>>>>> 682adfe08e1dd75983329f8440acca5c84195f4b
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#2d3748",
                  marginBottom: "8px",
                }}
              >
                Message
              </label>

              <textarea
                name='Message'
                rows={5}
                value={form.Message}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: "8px",
                  border: "2px solid #e2e8f0",
                  fontSize: "16px",
                  color: "#1a202c",
                }}
              />
            </div>

            <button
              type='submit'
              disabled={loading}
              className={`
            w-full py-4 rounded-lg font-semibold text-white
            transition-all duration-300
            ${
              loading
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:opacity-90 hover:scale-[1.01]"
            }
  `}
            >
              {loading ? "Sending..." : "Send Demo Request"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
