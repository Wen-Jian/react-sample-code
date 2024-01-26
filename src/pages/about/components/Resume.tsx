"use client"

import React from "react";
import resumeImg from "~/src/assets/imgs/resume_en.jpg";
// import { Layout } from "~/src/components/layout";
import { Layout } from "../../../components/layout";


export const Resume = () => {
    return (
        <Layout>
            <img className="w-full" src={resumeImg} alt="resumeImg" />
        </Layout>
    )
}