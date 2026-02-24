import { Helmet } from "react-helmet-async";

interface SEOProps {
    title?: string;
    description?: string;
    canonicalPath?: string;
    ogType?: string;
    ogImage?: string;
    keywords?: string;
}

const SEO = ({
    title,
    description,
    canonicalPath = "",
    ogType = "website",
    ogImage = "/assets/logo.jpeg",
    keywords,
}: SEOProps) => {
    const siteName = "Lendigo Microcare";
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const baseUrl = "https://lendigomicrocare.com";
    const url = `${baseUrl}${canonicalPath}`;

    const defaultDescription = "Get instant personal loans with Lendigo Microcare. Fast approval, low interest rates, and flexible repayment. Regulated Entity.";

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={url} />

            {/* Open Graph Tags */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={`${baseUrl}${ogImage}`} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />
        </Helmet>
    );
};

export default SEO;
