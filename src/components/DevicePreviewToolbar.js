import React from 'react';
import { FaDesktop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa'; // Import icons
import './DevicePreviewToolbar.css';

function DevicePreviewToolbar({ onDeviceChange }) {
  return (
    <div className="device-preview-toolbar">
      <button className="device-btn" onClick={() => onDeviceChange('desktop')}>
        <FaDesktop size={24} />
      </button>
      <button className="device-btn" onClick={() => onDeviceChange('tablet')}>
        <FaTabletAlt size={24} />
      </button>
      <button className="device-btn" onClick={() => onDeviceChange('mobile')}>
        <FaMobileAlt size={24} />
      </button>
    </div>
  );
}

export default DevicePreviewToolbar;
