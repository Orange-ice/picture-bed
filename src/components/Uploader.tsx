import React, { MutableRefObject, useRef, useState } from 'react';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useStores } from '@/stores';
import styled from 'styled-components';
import { observer } from 'mobx-react';

const { Dragger } = Upload;

const Result = styled.div`
  border: 1px #ccc dashed;
  margin-top: 30px;
  padding: 20px;

  img {
    max-width: 300px;
  }
`;
const Name = styled.dd`
  color: deepskyblue;
`;
const Uploader = observer(() => {
  const { ImageStore } = useStores();
  const inputWidth: MutableRefObject<HTMLInputElement> = useRef() as MutableRefObject<HTMLInputElement>;
  const inputHeight: MutableRefObject<HTMLInputElement> = useRef() as MutableRefObject<HTMLInputElement>;
  const [width, setWidth] = useState('300');
  const [height, setHeight] = useState('300');
  const widthChange = () => {
    setWidth(inputWidth.current.value || '300');
  };
  const heightChange = () => {
    setHeight(inputHeight.current.value || '300');
  };
  const props = {
    showUploadList: false,
    beforeUpload: (file: File) => {
      ImageStore.setFile(file);
      ImageStore.setFilename(file.name);
      ImageStore.upload().then(serverFile => {
        message.success('上传成功');
        console.log(serverFile);
      }).catch(() => {
        message.error('上传失败，请稍后再试');
      });
      return false;
    }
  };
  return (
    <>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined/>
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading company data or other
          band files
        </p>
      </Dragger>
      {ImageStore.serverFile
        ? <Result>
          <h1>上传结果</h1>
          <dl>
            <dt>线上地址</dt>
            <dd>
              <a href={ImageStore.serverFile.attributes.url.attributes.url} target="_blank" rel="noreferrer">
                {ImageStore.serverFile.attributes.url.attributes.url}
              </a>
            </dd>
            <dt>文件名</dt>
            <Name>{ImageStore.filename}</Name>
            <dt>图片预览</dt>
            <dd>
              <img src={ImageStore.serverFile.attributes.url.attributes.url} alt=""/>
            </dd>
            <dt>更多尺寸</dt>
            <dd>
              <input ref={inputWidth} onChange={widthChange} placeholder="最大宽度（可选）"/>
              <input ref={inputHeight} onChange={heightChange} placeholder="最大高度（可选）"/>
            </dd>
            <dd>
              <a href={`${ImageStore.serverFile.attributes.url.attributes.url}?imageView2/0/w/${width}/h/${height}`}
                 target="_blank" rel="noreferrer">
                {`${ImageStore.serverFile.attributes.url.attributes.url}?imageView2/0/w/${width}/h/${height}`}
              </a>
            </dd>
          </dl>
        </Result>
        : null
      }
    </>
  );
});

export default Uploader;
