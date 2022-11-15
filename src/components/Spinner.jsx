// !!! nts Requires tailwind configs to work
const Spinner = ({overlay = false}) => {
    return (
        <div className={overlay ? "fixed top-0 left-0 bg-black/50 w-full h-full" : ''}>
          <div className="absolute w-7 h-7 bg-primary rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 animate-spin-inner">
              <div className="absolute rounded-full border-[3px] w-16 h-16 border-transparent border-l-primary -translate-x-1/2 -translate-y-1/2 rotate-[65deg]"></div>
              <div className="absolute rounded-full border-[3px] w-16 h-16 border-transparent border-t-primary -translate-x-1/2 -translate-y-1/2 rotate-[45deg]"></div>
              <div className="absolute rounded-full border-[3px] w-16 h-16 border-transparent border-l-primary -translate-x-1/2 -translate-y-1/2 rotate-[65deg] -scale-100"></div>
              <div className="absolute rounded-full border-[3px] w-16 h-16 border-transparent border-t-primary -translate-x-1/2 -translate-y-1/2 rotate-[45deg] -scale-100"></div>
              
              <div className="absolute top-1/2 left-1/2 w-2.5 h-2.5 bg-primary rounded-full -translate-y-1/2 translate-x-6"></div>
              <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-primary rounded-full -translate-y-1/2 -translate-x-9"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 animate-spin-outer">
              <div className="absolute rounded-full border-[3px] w-24 h-24 border-transparent border-l-primary -translate-x-1/2 -translate-y-1/2 rotate-[65deg]"></div>
              <div className="absolute rounded-full border-[3px] w-24 h-24 border-transparent border-t-primary -translate-x-1/2 -translate-y-1/2 rotate-[45deg]"></div>
              <div className="absolute rounded-full border-[3px] w-24 h-24 border-transparent border-l-primary -translate-x-1/2 -translate-y-1/2 rotate-[65deg] -scale-100"></div>
              <div className="absolute rounded-full border-[3px] w-24 h-24 border-transparent border-t-primary -translate-x-1/2 -translate-y-1/2 rotate-[45deg] -scale-100"></div>
              
              <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-primary rounded-full -translate-y-1/2 translate-x-[38px]"></div>
              <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-primary rounded-full -translate-y-1/2 -translate-x-[52px]"></div>
          </div>
      </div>
    )
  }


  
  export default Spinner