
import React, { Suspense, ErrorInfo, ReactNode } from 'react';
import Spinner from '../../components/spinner/spinner.component';

type ErrorBoundaryPropsType = {
    children: ReactNode
};
type ErrorBoundaryStateType = {
    error?: Error,
    hasError: boolean
};

class ErrorBoundary extends React.Component<ErrorBoundaryPropsType, ErrorBoundaryStateType> {
    constructor(props: any) {
        super(props);

        this.state = {
            'error': undefined,
            hasError: false
        };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryStateType  {
        return {
            error,
            hasError: true
        };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error("Uncaught error:", error, info);
        this.setState((state) => ({
            ...state,
            error: undefined,
            hasError: false
        }));
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return (
                <Suspense
                    fallback={<Spinner />}
                >
                    <div>Error</div>
                </Suspense>
            );
        } else {
            return (
                children
            );
        }
    }
}

export default ErrorBoundary;