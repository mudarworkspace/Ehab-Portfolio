import React from 'react'
import { Skeleton } from 'primereact/skeleton';
import "./SkeletonLoader.scss";

const SkeletonLoader = ({ className }) => {
    return (
        <div className={`skeleton ${className}`}>
            <Skeleton className=""></Skeleton>
        </div>
    )
}

export default SkeletonLoader