import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import useSWR from 'swr';
import { baseUrl } from '../../constants';
import { fetcher } from '../../utils';

const SponsorsFooter = () => {
  const router = useRouter();
  const sponsorsURL = `/api/sponsors?locale=${router.locale}`;
  const { data: sponsors } = useSWR(sponsorsURL, fetcher);

 

  if (sponsors) {
    const { sponsor_image_export } = sponsors;
    return (
      <>
        <div id = "related-companies-footer" className="related-companies-footer">
          {sponsors.sponsor?.map((sponsor, idx) => (
            <a href = {sponsor.sponsor_link.url} rel = "noreferrer" target = "_blank" className="sponsor-field" key={`sponsor-${idx}`}>
              <Image
                src={sponsor.sponsor_image.url}
                title={sponsor.sponsor_image.title}
                alt={sponsor.sponsor_image.alt}
                priority={false}
                width={sponsor.sponsor_image?.dimensions.width}
                height={sponsor.sponsor_image?.dimensions.height}
              />
            </a>
          ))}
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default SponsorsFooter;
