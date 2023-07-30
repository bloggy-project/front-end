const handleCdnPath = (presignedUrl: string, type: 'thumb' | 'post') => {
  const baseS3Url = process.env.NEXT_PUBLIC_S3_URL as string;
  const baseCdnUrl = process.env.NEXT_PUBLIC_CDN_URL as string;
  const questionMarkIndex = presignedUrl.indexOf('?');
  const cdnPath = presignedUrl.slice(baseS3Url.length, questionMarkIndex);
  switch (type) {
    case 'thumb':
      return `${baseCdnUrl}${cdnPath}?w=200&h=200`;
    case 'post':
      return `${baseCdnUrl}${cdnPath}`;
  }
};

export default handleCdnPath;
