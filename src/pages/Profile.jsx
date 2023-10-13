import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";

export default function Profile() {
  const { id } = useParams();
  return <div>{id}</div>;
}
