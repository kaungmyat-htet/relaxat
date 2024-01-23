export default function SideBar() {
    const sideBarData = [
        {
            svg: `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 44 44"
        fill="none"
    >
        <path
            d="M14.6667 9.16666H11C10.0275 9.16666 9.0949 9.55296 8.40727 10.2406C7.71964 10.9282 7.33333 11.8609 7.33333 12.8333V34.8333C7.33333 35.8058 7.71964 36.7384 8.40727 37.426C9.0949 38.1137 10.0275 38.5 11 38.5H21.4445M33 25.6667V33H40.3333M33 20.1667V12.8333C33 11.8609 32.6137 10.9282 31.9261 10.2406C31.2384 9.55296 30.3058 9.16666 29.3333 9.16666H25.6667"
            stroke="#A9A9A9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M14.6667 20.1667H22M14.6667 27.5H20.1667M14.6667 9.16667C14.6667 8.19421 15.053 7.26157 15.7406 6.57394C16.4282 5.88631 17.3609 5.5 18.3333 5.5H22C22.9725 5.5 23.9051 5.88631 24.5927 6.57394C25.2804 7.26157 25.6667 8.19421 25.6667 9.16667C25.6667 10.1391 25.2804 11.0718 24.5927 11.7594C23.9051 12.447 22.9725 12.8333 22 12.8333H18.3333C17.3609 12.8333 16.4282 12.447 15.7406 11.7594C15.053 11.0718 14.6667 10.1391 14.6667 9.16667ZM25.6667 33C25.6667 34.9449 26.4393 36.8102 27.8145 38.1854C29.1898 39.5607 31.0551 40.3333 33 40.3333C34.9449 40.3333 36.8102 39.5607 38.1854 38.1854C39.5607 36.8102 40.3333 34.9449 40.3333 33C40.3333 31.0551 39.5607 29.1898 38.1854 27.8145C36.8102 26.4393 34.9449 25.6667 33 25.6667C31.0551 25.6667 29.1898 26.4393 27.8145 27.8145C26.4393 29.1898 25.6667 31.0551 25.6667 33Z"
            stroke="#A9A9A9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>`,
            text: "Financial",
        },
        {
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48" fill="none">
            <path d="M4 24C4 16.458 4 12.686 6.344 10.344C8.686 8 12.458 8 20 8H28C35.542 8 39.314 8 41.656 10.344C44 12.686 44 16.458 44 24V28C44 35.542 44 39.314 41.656 41.656C39.314 44 35.542 44 28 44H20C12.458 44 8.686 44 6.344 41.656C4 39.314 4 35.542 4 28V24Z" stroke="#A9A9A9" stroke-width="1.5"/>
            <path d="M14 8V5M34 8V5M5 18H43" stroke="#A9A9A9" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M36 34C36 34.5304 35.7893 35.0391 35.4142 35.4142C35.0391 35.7893 34.5304 36 34 36C33.4696 36 32.9609 35.7893 32.5858 35.4142C32.2107 35.0391 32 34.5304 32 34C32 33.4696 32.2107 32.9609 32.5858 32.5858C32.9609 32.2107 33.4696 32 34 32C34.5304 32 35.0391 32.2107 35.4142 32.5858C35.7893 32.9609 36 33.4696 36 34ZM36 26C36 26.5304 35.7893 27.0391 35.4142 27.4142C35.0391 27.7893 34.5304 28 34 28C33.4696 28 32.9609 27.7893 32.5858 27.4142C32.2107 27.0391 32 26.5304 32 26C32 25.4696 32.2107 24.9609 32.5858 24.5858C32.9609 24.2107 33.4696 24 34 24C34.5304 24 35.0391 24.2107 35.4142 24.5858C35.7893 24.9609 36 25.4696 36 26ZM26 34C26 34.5304 25.7893 35.0391 25.4142 35.4142C25.0391 35.7893 24.5304 36 24 36C23.4696 36 22.9609 35.7893 22.5858 35.4142C22.2107 35.0391 22 34.5304 22 34C22 33.4696 22.2107 32.9609 22.5858 32.5858C22.9609 32.2107 23.4696 32 24 32C24.5304 32 25.0391 32.2107 25.4142 32.5858C25.7893 32.9609 26 33.4696 26 34ZM26 26C26 26.5304 25.7893 27.0391 25.4142 27.4142C25.0391 27.7893 24.5304 28 24 28C23.4696 28 22.9609 27.7893 22.5858 27.4142C22.2107 27.0391 22 26.5304 22 26C22 25.4696 22.2107 24.9609 22.5858 24.5858C22.9609 24.2107 23.4696 24 24 24C24.5304 24 25.0391 24.2107 25.4142 24.5858C25.7893 24.9609 26 25.4696 26 26ZM16 34C16 34.5304 15.7893 35.0391 15.4142 35.4142C15.0391 35.7893 14.5304 36 14 36C13.4696 36 12.9609 35.7893 12.5858 35.4142C12.2107 35.0391 12 34.5304 12 34C12 33.4696 12.2107 32.9609 12.5858 32.5858C12.9609 32.2107 13.4696 32 14 32C14.5304 32 15.0391 32.2107 15.4142 32.5858C15.7893 32.9609 16 33.4696 16 34ZM16 26C16 26.5304 15.7893 27.0391 15.4142 27.4142C15.0391 27.7893 14.5304 28 14 28C13.4696 28 12.9609 27.7893 12.5858 27.4142C12.2107 27.0391 12 26.5304 12 26C12 25.4696 12.2107 24.9609 12.5858 24.5858C12.9609 24.2107 13.4696 24 14 24C14.5304 24 15.0391 24.2107 15.4142 24.5858C15.7893 24.9609 16 25.4696 16 26Z" fill="#A9A9A9"/>
          </svg>`,
            text: "Schedule",
        },
        {
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 37 37" fill="none">
            <path d="M32.8751 30.9297C30.4874 26.8019 26.6602 23.9835 22.226 22.9675C24.3331 22.1042 26.075 20.5361 27.1542 18.531C28.2334 16.526 28.5829 14.2084 28.143 11.9742C27.703 9.74009 26.501 7.72802 24.7422 6.28179C22.9834 4.83555 20.777 4.04489 18.5 4.04489C16.223 4.04489 14.0166 4.83555 12.2578 6.28179C10.499 7.72802 9.29697 9.74009 8.85704 11.9742C8.41712 14.2084 8.76661 16.526 9.84581 18.531C10.925 20.5361 12.6669 22.1042 14.774 22.9675C10.3456 23.9792 6.51258 26.8019 4.12493 30.9297C4.05581 31.0618 4.04042 31.2155 4.08196 31.3587C4.12351 31.5019 4.21878 31.6236 4.34787 31.6982C4.47697 31.7728 4.6299 31.7947 4.77473 31.7592C4.91956 31.7237 5.04509 31.6336 5.12508 31.5078C7.94922 26.6212 12.9529 23.7031 18.5 23.7031C24.0471 23.7031 29.0508 26.6212 31.8749 31.5078C31.9256 31.5956 31.9985 31.6685 32.0863 31.7193C32.174 31.77 32.2736 31.7968 32.375 31.7969C32.4766 31.7972 32.5764 31.7702 32.6641 31.7188C32.7966 31.6421 32.8932 31.5159 32.9328 31.3679C32.9724 31.2199 32.9516 31.0623 32.8751 30.9297ZM9.82813 13.875C9.82813 12.1599 10.3367 10.4832 11.2896 9.05716C12.2425 7.63108 13.5968 6.51958 15.1814 5.86323C16.766 5.20687 18.5096 5.03514 20.1918 5.36975C21.874 5.70435 23.4192 6.53027 24.6319 7.74305C25.8447 8.95584 26.6706 10.501 27.0053 12.1832C27.3399 13.8654 27.1681 15.609 26.5118 17.1936C25.8554 18.7782 24.7439 20.1325 23.3178 21.0854C21.8918 22.0383 20.2151 22.5469 18.5 22.5469C16.2009 22.5442 13.9967 21.6297 12.371 20.004C10.7453 18.3783 9.83081 16.1741 9.82813 13.875Z" fill="#A9A9A9"/>
          </svg>`,
            text: "Customer",
        },
        {
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 42 42" fill="none">
            <g clip-path="url(#clip0_162_369)">
              <path d="M6.11133 0.147652C5.29922 0.426556 4.68398 1.10741 4.51172 1.91132C4.44609 2.21484 4.42969 4.4707 4.44609 9.51562C4.4707 16.6605 4.4707 16.6934 4.64297 17.0707C4.87265 17.5629 5.40586 18.0961 5.89805 18.3176C6.20976 18.4652 6.46406 18.498 7.44844 18.5226L8.61328 18.5555L8.90039 18.2684C9.26953 17.8992 9.28594 17.5793 8.94961 17.2101L8.71172 16.9394L7.63711 16.8984C6.60351 16.8574 6.5625 16.8492 6.34101 16.6277L6.11133 16.4062V9.26952V2.1328L6.34101 1.91132L6.5625 1.68163H23.2148H39.8672L40.0887 1.91132L40.3184 2.1328V9.26952V16.4062L40.0887 16.6277L39.8672 16.8574L36.7664 16.9066C35.0684 16.9312 33.6574 16.9559 33.641 16.9641C33.6246 16.9723 32.9684 17.6121 32.1809 18.3914L30.7535 19.8023L29.3836 18.4406C28.6289 17.6941 27.9316 17.0379 27.8332 16.9887C27.7102 16.9312 26.6109 16.8984 24.3715 16.8984H21.0902L20.9344 16.5457C20.5652 15.7254 19.7285 14.8723 18.8672 14.4375C18.3832 14.1914 16.882 13.6992 16.6277 13.6992C16.357 13.6992 16.0125 13.9617 15.8812 14.2652C15.8074 14.4293 15.3316 15.7254 14.823 17.1445C14.3062 18.5637 13.7895 19.9172 13.6746 20.1387C13.3465 20.8031 12.7312 21.5496 12.1488 22.0254C11.5992 22.4601 9.61406 23.625 9.40898 23.625C9.35156 23.625 9.21211 23.5348 9.11367 23.4281C9.00703 23.3215 8.73633 23.141 8.50664 23.0344C8.08008 22.8457 8.05547 22.8457 4.96289 22.8457C1.8539 22.8457 1.8457 22.8457 1.41094 23.0426C0.836716 23.2969 0.287107 23.9203 0.123044 24.4781C0.0164038 24.8555 -2.49594e-06 25.9219 0.0164038 32.5746C0.0410131 40.1871 0.0410131 40.2363 0.213279 40.6137C0.434763 41.0894 0.910544 41.5652 1.38633 41.7867C1.74726 41.9508 1.87851 41.959 4.96289 41.959C8.06367 41.959 8.17031 41.9508 8.53945 41.7867C8.75273 41.6883 9.06445 41.4586 9.22851 41.2781L9.54023 40.95L10.2047 41.2043C12.3047 41.9836 12.4441 42 19.5645 42C26.2172 42 26.1434 42.0082 26.9637 41.4668C28.1039 40.7121 28.6043 39.0879 28.0711 37.882L27.907 37.4965L28.3582 37.275C28.9406 36.9797 29.5477 36.307 29.7855 35.7C30.0398 35.0437 30.048 34.0758 29.7937 33.518C29.6953 33.2965 29.6133 33.1078 29.6133 33.0996C29.6133 33.0832 29.8102 32.9684 30.048 32.8289C30.5895 32.5254 31.0488 32.025 31.3277 31.4262C31.5082 31.0406 31.541 30.8519 31.541 30.2285C31.541 29.5969 31.5082 29.4246 31.3195 29.0226C31.0324 28.4074 30.4664 27.8086 29.9086 27.5379L29.4656 27.3164L29.6297 26.8898C29.8594 26.2828 29.8512 25.3805 29.6051 24.7324C29.3508 24.0598 28.6125 23.3215 27.9316 23.0426C27.4395 22.8539 27.4148 22.8457 23.8465 22.8211C21.1148 22.7965 20.2535 22.7719 20.2863 22.698C20.6391 21.7629 21.3281 19.4414 21.3773 19.0476L21.4348 18.5391H24.2648H27.1031L28.7109 20.1305C29.7035 21.1148 30.4008 21.7465 30.5402 21.7793C30.9914 21.8941 31.1883 21.7465 32.8125 20.1387L34.4121 18.5473L37.2832 18.5226C40.023 18.498 40.1707 18.4898 40.5316 18.3258C41.0238 18.0961 41.557 17.5629 41.7867 17.0707C41.959 16.6934 41.959 16.6934 41.959 9.26952C41.959 1.8457 41.959 1.8457 41.7867 1.46835C41.557 0.976166 41.0238 0.442963 40.5316 0.213276L40.1543 0.041008L23.3379 0.0246048C7.55508 0.00819778 6.49687 0.0163994 6.11133 0.147652ZM18.4242 16.0863C18.8918 16.4062 19.2609 16.8492 19.507 17.3824C19.6793 17.768 19.7121 17.9648 19.7121 18.5801C19.7121 19.2937 19.6875 19.4004 19.0066 21.4101C18.6129 22.5586 18.293 23.6004 18.293 23.7316C18.293 23.8793 18.3832 24.0516 18.5309 24.2074L18.7687 24.4453H22.8211C25.5035 24.4453 26.9719 24.4781 27.1934 24.5355C27.6117 24.6504 28.0137 25.0687 28.1285 25.4953C28.3172 26.1926 27.8824 26.9473 27.1934 27.1441C26.9883 27.2016 25.9547 27.2344 24.4617 27.2344H22.05L21.8121 27.4723C21.5578 27.7348 21.5004 28.0547 21.6645 28.4074C21.8531 28.834 21.8531 28.834 25.5938 28.875C28.1859 28.9078 29.1293 28.9406 29.2605 29.0226C29.359 29.0801 29.5477 29.2605 29.6707 29.4246C29.8676 29.6789 29.9004 29.8019 29.9004 30.2203C29.9004 30.8191 29.6953 31.1637 29.2031 31.418C28.8996 31.5738 28.7109 31.582 25.6102 31.582C23.4855 31.582 22.2469 31.6148 22.0828 31.6723C21.648 31.8199 21.4348 32.3941 21.6562 32.8207C21.8613 33.198 22.0746 33.2226 24.6668 33.2226C26.0859 33.2226 27.2426 33.2555 27.4148 33.3047C27.8332 33.4277 28.2762 33.9527 28.35 34.4203C28.391 34.7074 28.3582 34.8551 28.2105 35.1668C27.9809 35.6098 27.7184 35.8312 27.2672 35.9297C27.0949 35.9707 25.848 36.0117 24.5027 36.0117H22.05L21.8121 36.2496C21.484 36.5777 21.484 36.9797 21.8121 37.3406L22.05 37.6113L23.9285 37.6523C25.9629 37.6934 26.0121 37.7098 26.3813 38.1937C26.8734 38.8336 26.652 39.7851 25.9219 40.1707L25.5691 40.3594H19.5645C12.8133 40.3594 12.7395 40.3512 11.1152 39.7687C10.623 39.5883 10.1473 39.4242 10.0652 39.3996C9.93398 39.3586 9.92578 38.9648 9.94219 32.2957L9.96679 25.241L11.1562 24.5848C13.0512 23.5512 13.9371 22.7965 14.741 21.5496C15.2168 20.8195 15.3316 20.5488 16.3242 17.8254L17.1609 15.5121L17.6285 15.6844C17.8828 15.7828 18.2355 15.9633 18.4242 16.0863ZM4.11797 29.6461L4.14258 34.8551L4.38047 35.1012C4.57734 35.3062 4.69219 35.3555 4.96289 35.3555C5.23359 35.3555 5.34844 35.3062 5.54531 35.1012L5.7832 34.8551L5.80781 29.6461L5.83242 24.4289L6.85781 24.4617C7.875 24.4863 7.8914 24.4863 8.08828 24.716L8.28515 24.9457V32.4105V39.8836L8.04726 40.1215L7.80937 40.3594H4.96289H2.1164L1.87851 40.1215L1.64062 39.8836V32.4269C1.64062 25.7168 1.65703 24.9539 1.77187 24.7898C1.96875 24.5027 2.16562 24.4535 3.17461 24.4535L4.09336 24.4453L4.11797 29.6461Z" fill="#A9A9A9"/>
              <path d="M4.78241 36.7336C4.2164 36.8156 3.97851 37.6687 4.39687 38.0953C4.70038 38.3988 5.22538 38.3988 5.5289 38.0953C5.69296 37.923 5.74218 37.7918 5.74218 37.5293C5.74218 36.9961 5.32382 36.6516 4.78241 36.7336Z" fill="black"/>
              <path d="M11.468 17.0297C11.1809 17.1773 11.0742 17.3824 11.0742 17.7598C11.0742 18.293 11.6402 18.6621 12.1488 18.457C12.4687 18.3258 12.6328 18.0797 12.6328 17.7352C12.6328 17.3742 12.518 17.1773 12.2227 17.0215C11.9273 16.8656 11.7551 16.8738 11.468 17.0297Z" fill="black"/>
            </g>
            <defs>
              <clipPath id="clip0_162_369">
                <rect width="42" height="42" fill="white"/>
              </clipPath>
            </defs>
          </svg>`,
            text: "Reviews",
        },
    ];

    return (
        <div className="flex w-[15rem] justify-center items-center">
            <div className="flex gap-10 flex-col justify-center text-center">
                {sideBarData.map((each) => {
                    return (
                        <div key={each.text} className="flex items-center gap-3">
                            <div
                                dangerouslySetInnerHTML={{ __html: each.svg }}
                            />
                            <p>{each.text}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
