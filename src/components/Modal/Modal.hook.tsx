import { useEffect, useState, useCallback } from 'react';
import { getLaunch, getRocketName } from '../../services/api';

export interface Launch {
  links: {
    youtube_id: string;
  };
  id: string;
  name: string;
}

export const useModal = (id: string) => {
  const [launch, setLaunch] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const [rocketName, setRocketName] = useState(false);

  const getLaunchData = useCallback(async () => {
    setIsLoading(true);

    const response = await getLaunch(id);
    setLaunch(response);

    const responseRocketName = await getRocketName(response.rocket);
    setRocketName(responseRocketName);

    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    getLaunchData();
  }, [getLaunchData]);

  return { launch, isLoading, rocketName };
};
