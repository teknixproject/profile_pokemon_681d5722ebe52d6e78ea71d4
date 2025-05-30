'use client'
import React, { MouseEventHandler } from 'react';

interface AppleNavigationBarProps {
  id?: string;
  style?: React.CSSProperties;
  className?: string;
  onClickLogo?: MouseEventHandler<HTMLAnchorElement> | undefined;
  onClickStore?: MouseEventHandler<HTMLAnchorElement> | undefined;
  onClickMac?: MouseEventHandler<HTMLAnchorElement> | undefined;
  onClickIPad?: MouseEventHandler<HTMLAnchorElement> | undefined;
  onClickIPhone?: MouseEventHandler<HTMLAnchorElement> | undefined;
  onClickWatch?: MouseEventHandler<HTMLAnchorElement> | undefined;
  onClickAirPods?: MouseEventHandler<HTMLAnchorElement> | undefined;
  onClickTV?: MouseEventHandler<HTMLAnchorElement> | undefined;
  onClickEntertainment?: MouseEventHandler<HTMLAnchorElement> | undefined;
  onClickAccessories?: MouseEventHandler<HTMLAnchorElement> | undefined;
  onClickSupport?: MouseEventHandler<HTMLAnchorElement> | undefined;
  onClickSearch?: MouseEventHandler<HTMLButtonElement> | undefined;
  onClickBag?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const AppleNavigationBar: React.FC<AppleNavigationBarProps> = ({
  id,
  style,
  className,
  onClickLogo,
  onClickStore,
  onClickMac,
  onClickIPad,
  onClickIPhone,
  onClickWatch,
  onClickAirPods,
  onClickTV,
  onClickEntertainment,
  onClickAccessories,
  onClickSupport,
  onClickSearch,
  onClickBag
}) => {
  return (
    <nav className={`bg-[#f5f5f7] bg-opacity-90 backdrop-blur-md w-full px-6 py-3 flex items-center justify-between ${className || ''}`} id={id} style={style}>
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Apple Logo */}
        <a href="#" className="text-black" onClick={onClickLogo}>
          <svg className="w-6 h-6 fill-current" viewBox="0 0 16 20">
            <path d="M12.563 4.456c1.168-1.412 1.03-3.274 0.992-3.307-0.795-1.19-2.057-1.353-2.51-1.376-1.095-0.102-2.116 0.638-2.663 0.638-0.55 0-1.42-0.617-2.331-0.602-1.207 0.018-2.31 0.695-2.932 1.77-1.242 2.135-0.32 5.32 0.893 7.057 0.587 0.852 1.293 1.812 2.225 1.777 0.888-0.033 1.225-0.576 2.3-0.576 1.075 0 1.372 0.576 2.317 0.56 0.96-0.016 1.567-0.87 2.158-1.72 0.673-0.986 0.952-1.934 0.97-1.986-0.02-0.01-1.87-0.72-1.888-2.85-0.017-1.78 1.457-2.63 1.524-2.67l0.015-0.015z M10.51 1.344c0.49-0.588 0.815-1.4 0.727-2.207-0.702 0.027-1.552 0.464-2.058 1.052-0.45 0.517-0.845 1.342-0.738 2.14 0.78 0.062 1.582-0.398 2.07-0.985z" />
          </svg>
        </a>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm">
          <a href="#" className="text-gray-800 hover:text-gray-900" onClick={onClickStore}>Cửa Hàng</a>
          <a href="#" className="text-gray-800 hover:text-gray-900" onClick={onClickMac}>Mac</a>
          <a href="#" className="text-gray-800 hover:text-gray-900" onClick={onClickIPad}>iPad</a>
          <a href="#" className="text-gray-800 hover:text-gray-900" onClick={onClickIPhone}>iPhone</a>
          <a href="#" className="text-gray-800 hover:text-gray-900" onClick={onClickWatch}>Watch</a>
          <a href="#" className="text-gray-800 hover:text-gray-900" onClick={onClickAirPods}>AirPods</a>
          <a href="#" className="text-gray-800 hover:text-gray-900" onClick={onClickTV}>TV & Nhà</a>
          <a href="#" className="text-gray-800 hover:text-gray-900" onClick={onClickEntertainment}>Giải Trí</a>
          <a href="#" className="text-gray-800 hover:text-gray-900" onClick={onClickAccessories}>Phụ Kiện</a>
          <a href="#" className="text-gray-800 hover:text-gray-900" onClick={onClickSupport}>Hỗ Trợ</a>
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-800" onClick={onClickSearch}>
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </button>
          <button className="text-gray-800" onClick={onClickBag}>
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 6h-3V5c0-1.654-1.346-3-3-3h-2C9.346 2 8 3.346 8 5v1H5c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-9-1c0-.551.449-1 1-1h2c.551 0 1 .449 1 1v1h-4V5zm9 14H5V8h14v11z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AppleNavigationBar;