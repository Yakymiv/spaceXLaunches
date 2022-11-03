import { useState, useEffect, useCallback, useRef } from 'react';
import { getLaunchesPage } from '../../services/api';

export interface Launch {
  links: {
    youtube_id: string;
  };
  id: string;
}

export const useAppLayout = () => {
  const [launchesData, setLaunchesData] = useState<Launch[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPage, setNextPage] = useState(false);
  const [query, setQuery] = useState({ query: {} });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [launchId, setLaunchId] = useState('');

  const getLaunches = useCallback(async (options = {}) => {
    setIsLoading(true);

    const response = await getLaunchesPage(options);

    setLaunchesData((prev) => {
      return [...prev, ...response.docs];
    });

    setIsLoading(false);
    setNextPage(response.nextPage);
  }, []);

  const intObsrv: any = useRef();

  const lastPostRef = useCallback(
    (post: any) => {
      if (isLoading) return;

      if (intObsrv.current) intObsrv.current.disconnect();

      intObsrv.current = new IntersectionObserver((posts) => {
        if (posts[0].isIntersecting && nextPage) {
          getLaunches({
            options: {
              page: nextPage,
            },
            ...query,
          });
        }
      });

      if (post) intObsrv.current.observe(post);
    },
    [getLaunches, isLoading, nextPage, query]
  );

  useEffect(() => {
    getLaunches({
      ...query,
    });
  }, [getLaunches, query, setNextPage]);

  const handleClose = () => {
    setIsModalOpen(!isModalOpen);
    setLaunchId('');
  };

  const handleOpen = (e: {}, id: string) => {
    setIsModalOpen(true);
    setLaunchId(id);
  };

  return {
    launchesData,
    isLoading,
    lastPostRef,
    setQuery,
    setLaunchesData,
    handleClose,
    isModalOpen,
    handleOpen,
    launchId,
  };
};
