import * as React from 'react';
import './loadingSpinner.css';
import { promiseTrackerHoc } from 'react-promise-tracker';
import { BeatLoader } from 'react-spinners';

interface IProps {
    trackedPromiseInProgress?: boolean;
}

const InnerLoadingSpinerComponent: React.StatelessComponent<IProps> = (
    props: IProps
) => {
    if (props.trackedPromiseInProgress) {
        return (
            <div className="loading">
                <BeatLoader loading={props.trackedPromiseInProgress} />
            </div>
        );
    }
    return null;
};

export const LoadingSpinnerComponent = promiseTrackerHoc(
    InnerLoadingSpinerComponent
);
