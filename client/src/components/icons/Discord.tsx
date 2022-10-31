function Discord({ color }: { color: string }) {
  return (
    <svg
      width="21"
      height="24"
      viewBox="0 0 21 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 cursor-pointer"
    >
      <g clipPath="url(#clip0_2557_17977)">
        <path
          // eslint-disable-next-line max-len
          d="M13.932 11.4C13.932 12.132 13.392 12.732 12.708 12.732C12.036 12.732 11.484 12.132 11.484 11.4C11.484 10.668 12.024 10.068 12.708 10.068C13.392 10.068 13.932 10.668 13.932 11.4ZM8.328 10.068C7.644 10.068 7.104 10.668 7.104 11.4C7.104 12.132 7.656 12.732 8.328 12.732C9.012 12.732 9.552 12.132 9.552 11.4C9.564 10.668 9.012 10.068 8.328 10.068ZM21 2.472V24C17.9768 21.3284 18.9437 22.2127 15.432 18.948L16.068 21.168H2.46C1.104 21.168 0 20.064 0 18.696V2.472C0 1.104 1.104 0 2.46 0H18.54C19.896 0 21 1.104 21 2.472ZM17.58 13.848C17.58 9.984 15.852 6.852 15.852 6.852C14.124 5.556 12.48 5.592 12.48 5.592L12.312 5.784C14.352 6.408 15.3 7.308 15.3 7.308C12.4495 5.7457 9.10106 5.74542 6.336 6.96C5.892 7.164 5.628 7.308 5.628 7.308C5.628 7.308 6.624 6.36 8.784 5.736L8.664 5.592C8.664 5.592 7.02 5.556 5.292 6.852C5.292 6.852 3.564 9.984 3.564 13.848C3.564 13.848 4.572 15.588 7.224 15.672C7.224 15.672 7.668 15.132 8.028 14.676C6.504 14.22 5.928 13.26 5.928 13.26C6.10453 13.3836 6.39563 13.5437 6.42 13.56C8.44547 14.6943 11.3226 15.0659 13.908 13.98C14.328 13.824 14.796 13.596 15.288 13.272C15.288 13.272 14.688 14.256 13.116 14.7C13.476 15.156 13.908 15.672 13.908 15.672C16.56 15.588 17.58 13.848 17.58 13.848Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_2557_17977">
          <rect width="21" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Discord;
