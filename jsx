import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

import TeamAvailabilityApp from "./TeamAvailabilityApp"; // your current component

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TeamAvailabilityApp />} />
      </Routes>
    </Router>
  );
}
