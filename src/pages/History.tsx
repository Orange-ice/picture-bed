import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import { Uploader } from '@/models/auth';
import { Button, List } from 'antd';
import { Object } from 'leancloud-storage';
import styled from 'styled-components';
import { useStores } from '@/stores';

const Img = styled.img`
  width: 120px;
  height: 80px;
  object-fit: contain;
  border: solid 1px #ccc;
`;

function History () {
  const { UserStore } = useStores();
  const [loading, setLoading] = useState(false);
  const [listData, setListData] = useState<Object[]>([]);
  const [hasData, setHasData] = useState(true);
  const [page, setPage] = useState(0);
  const fetchData = (page: number) => {
    if (!UserStore.currentUser) { return; }
    setLoading(true);
    Uploader.find({ page: page, limit: 10 }).then((data: any) => {
      console.log(data);
      if (data.length === 0) { setHasData(false); }
      setListData([...listData, ...data]);
    }).finally(() => {
      setLoading(false);
    });
  };
  useEffect(() => {
    setListData([]);
    fetchData(page);
  }, []);
  const onLoadMore = () => {
    fetchData(page + 1);
    setPage(page + 1);
  };
  const loadMore = hasData && UserStore.currentUser
    ? <div
      style={{
        textAlign: 'center',
        marginTop: 12,
        height: 32,
        lineHeight: '32px'
      }}
    >
      <Button onClick={onLoadMore}>loading more</Button>
    </div>
    : null;
  return (
    <Layout>
      <div>
        <div>
          <List
            loading={loading}
            itemLayout="horizontal"
            loadMore={loadMore}
            dataSource={listData}
            renderItem={item => (
              <List.Item key={item.id}>
                <div>
                  <Img src={item.attributes.url.attributes.url} alt=""/>
                </div>
                <div>{item.attributes.filename}</div>
                <div>
                  <a href={item.attributes.url.attributes.url} target="_blank" rel="noreferrer">
                    {item.attributes.url.attributes.url}
                  </a>
                </div>
              </List.Item>
            )}
          />
        </div>
      </div>
    </Layout>
  );
}

export default History;
