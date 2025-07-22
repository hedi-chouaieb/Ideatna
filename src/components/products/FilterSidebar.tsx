"use client";
import { X } from 'lucide-react';
import React, { useEffect } from 'react';

interface FilterSidebarProps {
  show: boolean;
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
  onApply?: () => void;
  onCancel?: () => void;
  applyLabel?: string;
  cancelLabel?: string;
  bottomActions?: React.ReactNode;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  show,
  title = 'Filter Treasures',
  onClose,
  children,
  onApply,
  onCancel,
  applyLabel = 'Show Results',
  cancelLabel = 'Clear All',
  bottomActions,
}) => {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalOverflow;
    }
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [show]);

  if (!show) return null;

  return (
    <>
      {/* Overlay - All devices */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-60"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className={`
        fixed inset-0 lg:top-0 lg:left-0 lg:right-auto lg:bottom-auto
        h-full w-full lg:w-80 bg-gradient-to-b from-amber-25 via-orange-25 to-red-25 z-60
        transform transition-transform duration-300 ease-in-out
        ${show ? 'translate-x-0' : '-translate-x-full'}
        flex flex-col border-r border-amber-200/50
      `}>
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-800 to-orange-800 text-white px-4 py-3 flex items-center justify-between flex-shrink-0">
          <h2 className="text-lg font-serif">{title}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5 text-amber-100" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
          {children}
        </div>

        {/* Sticky bottom buttons */}
        <div className="flex-shrink-0 bg-white/80 backdrop-blur-sm border-t border-amber-200/50 p-4 flex gap-3">
          {bottomActions ? (
            bottomActions
          ) : (
            <>
              <button
                type="button"
                onClick={onCancel || onClose}
                className="flex-1 px-4 py-2 border border-amber-300 text-amber-700 rounded-lg hover:bg-amber-50 transition-colors font-medium text-sm"
              >
                {cancelLabel}
              </button>
              <button
                type="button"
                onClick={onApply || onClose}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-800 hover:to-orange-800 text-white rounded-lg transition-all duration-200 font-medium text-sm"
              >
                {applyLabel}
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
