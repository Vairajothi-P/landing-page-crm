"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabase";

import "./admin.css";

export default function AdminDashboard() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    const { data, error } = await supabase
      .from("request_demo")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error) setRequests(data || []);
  };

  return (
    <>
      <div className='admin-container'>
        <div className='admin-content'>
          <div className='admin-header'>
            <h1>Admin Dashboard</h1>
            <p>Customer Form Submissions</p>
          </div>
          {requests.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Company</th>
                  <th>Role</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((req) => (
                  <tr key={req.id}>
                    <td>{req.Name}</td>
                    <td>{req.Email}</td>
                    <td>{req.Phone}</td>
                    <td>{req.Company}</td>
                    <td>{req.Role}</td>
                    <td className='message-cell'>{req.Message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className='no-data'>No customer submissions yet</div>
          )}
        </div>
      </div>
    </>
  );
}
