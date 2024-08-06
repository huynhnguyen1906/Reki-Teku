import ContentLoader from 'react-content-loader';

const LoadingContainer = (props: any) => (
    <ContentLoader
        speed={1}
        width={340}
        height={100}
        viewBox="0 0 340 100"
        backgroundColor="#4b3333"
        foregroundColor="#ffffff"
        {...props}
    >
        <rect x="0" y="0" rx="3" ry="3" width="67" height="11" />
        <rect x="76" y="0" rx="3" ry="3" width="140" height="11" />
        <rect x="127" y="48" rx="3" ry="3" width="53" height="11" />
        <rect x="187" y="48" rx="3" ry="3" width="72" height="11" />
        <rect x="18" y="48" rx="3" ry="3" width="100" height="11" />
        <rect x="2" y="70" rx="3" ry="3" width="251" height="12" />
        <rect x="18" y="23" rx="3" ry="3" width="140" height="11" />
        <rect x="166" y="23" rx="3" ry="3" width="173" height="11" />
    </ContentLoader>
);

export default LoadingContainer;
