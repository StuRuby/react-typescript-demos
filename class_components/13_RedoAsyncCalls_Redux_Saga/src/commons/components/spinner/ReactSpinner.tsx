import * as React from 'react';
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners';

const loading = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

interface Props {
    show: boolean;
}

export const ReactSpinner: React.StatelessComponent<Props> = (props: Props) => {
    return props.show ? (
        <div>
            <ClipLoader
                // css={loading}
                sizeUnit={'px'}
                size={150}
                color={'#123bac'}
                loading={props.show}
            />
        </div>
    ) : null;
};
