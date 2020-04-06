// @flow
import * as React from 'react';

import ContentWrapper from '../../components/commons/ContentWrapper';
import {Typography} from 'antd';
import {AppstoreOutlined} from '@ant-design/icons';
import View from '../../components/shared/View';
import Icons from '../../components/shared/Icons';

function Home() {
  return (
    <ContentWrapper isCenter>
      <View textAlign="center">
        <Icons icon={<AppstoreOutlined />} size="ultraBig" />
        <Typography.Title level={2}>
          Selamat Datang di SiRekrut
        </Typography.Title>
      </View>
    </ContentWrapper>
  );
}

export default Home;
