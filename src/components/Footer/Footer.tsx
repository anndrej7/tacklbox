'use client';

import Link from 'next/link';
import AnimateHeight from 'react-animate-height';
import React, { useState } from 'react';

import classNames from 'classnames';

const Footer = () => {
    const [usefullLinksHeight, setUsefullLinksHeight] = useState<any>(0);
    const [navHeight, setNavHeight] = useState<any>(0);
    const [hoursHeight, setHoursHeight] = useState<any>(0);

    return (
        <div className="container">
            footer
        </div>
    );
};

export default Footer;
