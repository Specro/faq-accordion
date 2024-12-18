import { useState, useRef, useEffect } from 'react';

export default function AccordionItem({ isOpen, title, children }) {
    const [open, setOpen] = useState(isOpen);
    const wrapperRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const content = contentRef?.current;
        const wrapper = wrapperRef?.current;
        if (content && wrapper) {        
            wrapper.style.height = open?content.offsetHeight+'px':0;
        }
    }, [open]);

    return (
        <div className="">
            <button className="flex justify-between items-center text-left w-full font-bold text-dark-purple py-6 gap-6 text-base leading-tight sm:text-lg hover:text-purple" onClick={() => setOpen(!open)}>
                {title}
                <img src={open?'./images/icon-minus.svg':'./images/icon-plus.svg'} alt="icon" />
            </button>
            <div className="h-0 transition-all duration-500 overflow-hidden" ref={wrapperRef}>
                <div ref={contentRef} className={`transition-opacity duration-300 pb-6 text-grayish-purple text-sm sm:text-base ${open?'opacity-100':'opacity-0'}`}>
                    {children}
                </div>
            </div>
        </div>
    );
}