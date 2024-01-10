"use client"
import Link from "next/link";
import React, { useRef, useEffect, useCallback, HTMLAttributeAnchorTarget } from "react";

type Props = {
    text: string;
    href: string;
    target?: HTMLAttributeAnchorTarget;
    className?: string;
};

const CustomLink = ({ text, href, target, className }: Props) => {
    const linkRef = useRef<HTMLAnchorElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);

    const updateSpanPosition = useCallback((e: MouseEvent | TouchEvent) => {
        const link = linkRef.current;
        const span = spanRef.current;
        if (!link || !span) return;

        let clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        let clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

        const parentOffset = link.getBoundingClientRect();
        const relX = clientX - parentOffset.left;
        const relY = clientY - parentOffset.top;

        span.style.top = relY + "px";
        span.style.left = relX + "px";
    }, []);

    useEffect(() => {
        const link = linkRef.current;
        if (!link) return;

        const eventTypes = ["mouseenter", "mouseout", "touchstart"];
        eventTypes.forEach(evt => {
            link.addEventListener(evt, updateSpanPosition as EventListener);
        });

        return () => {
            eventTypes.forEach(evt => {
                link.removeEventListener(evt, updateSpanPosition as EventListener);
            });
        };
    }, [updateSpanPosition]);

    return (
        <Link
            href={href}
            passHref
            ref={linkRef}
            target={target}
            className={`group relative border min-h-[50px] transition-[0.4s] cursor-pointer overflow-hidden border-solid border-[#606060] flex items-center justify-between gap-2.5 max-w-[230px] w-full px-4 py-2 rounded-[5px] hover:text-[#1F1F1F] z-0 ${className ?? ""}`}
        >
            {text}
            <i className="icon-arrow-right text-[13px] text-[#F58F20]"></i>
            <span
                ref={spanRef}
                className="absolute block w-0 h-0 bg-white -translate-x-2/4 -translate-y-2/4 z-[-1] rounded-[50%] group-hover:w-[225%] group-hover:h-[563px] group-active:w-[225%] group-active:h-[563px]"
                style={{
                    transition: "width 0.4s ease-in-out, height 0.4s ease-in-out",
                    transform: "translate(-50%, -50%)"
                }}
            ></span>
        </Link>
    );
};

export default CustomLink;
