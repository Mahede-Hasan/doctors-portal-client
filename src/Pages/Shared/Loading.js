import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center mt-32">
            <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;