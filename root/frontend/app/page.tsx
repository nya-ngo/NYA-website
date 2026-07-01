"use client";
import Image from "next/image";
import { useState } from "react";
import navigate from "next/navigation";
// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full  flex-col items-center   sm:items-start">
        
      </main>
    </div>
  );
}
