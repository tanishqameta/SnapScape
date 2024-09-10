import { useEffect, useState } from "react";

interface Props {
  url: string;
}

const useFetch = ({ url }: Props) => {
  const [error, setError] = useState<any>();
  const [data, setData] = useState<any>();
  const [isFetching, setIsFetching] = useState(true);

  return { data, isFetching, error };
};

export default useFetch;