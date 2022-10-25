import React, { useEffect, useState } from "react";
import KittenCard from "../../components/KittenCard/KittenCard";
import Skeleton from "../../components/Skeleton/Skeleton";
import axios from "axios";
import Sort from "../../components/SortBy/Sort";
import { KittenCardProps } from "../../types/types";
import InfiniteScroll from "react-infinite-scroller";

import styles from "./Home.module.scss";

const Home = () => {
  const [nextPage, setNextPage] = useState<number>(1);
  const [haseMore, setHaseMore] = useState<boolean>(false);
  const [perPage] = useState<number>(20);
  const [sortBy, setSortBy] = useState<string>("id");
  const [sortDir, setSortDir] = useState<string>("asc");

  const [items, setItems] = useState<KittenCardProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setItems([]);
    getItems();
  }, [sortBy, sortDir]);

  const getItems = (nextPage: number = 1) => {
    const queryString = `https://ftl-cryptokitties.fly.dev/api/crypto_kitties?page=${nextPage}&per_page=${perPage}&sort_by=${sortBy}&sort_dir=${sortDir}`;

    setIsLoading(true);
    axios
      .get(queryString)
      .then((data) => {
        const {
          cats,
          pagination_info: { current_page, next_page, total_pages },
        } = data.data;
        setItems((prev: KittenCardProps[]) => {
          return [...prev, ...cats];
        });
        setHaseMore(current_page < total_pages);
        setNextPage(next_page);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const sortByType = (sortType: string) => {
    setSortBy(sortType);
  };

  const sortByDir = (sortDir: string) => {
    setSortDir(sortDir);
  };

  const loadMore = () => {
    getItems(nextPage);
  };

  return (
    <>
      <div className={styles.sortWrapper}>
        <Sort
          sortType={sortByType}
          buttonsList={["name", "category", "price"]}
          buttonName="Sort by"
        />

        <Sort
          sortType={sortByDir}
          buttonsList={["asc", "desc"]}
          buttonName="Sort Dir"
          defaultActiveButton="asc"
        />
      </div>

      <InfiniteScroll
        pageStart={1}
        hasMore={!isLoading && haseMore}
        loader={<div key={0}>LOADING....</div>}
        loadMore={loadMore}
      >
        <div className={styles.cardsWrapper}>
          {isLoading
            ? [...new Array(20)].map((_, index) => <Skeleton key={index} />)
            : items.map((item, index: number) => (
                <KittenCard key={`${item.id}-${index}`} {...item} />
              ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default Home;
