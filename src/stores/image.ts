import { observable, action, makeObservable } from 'mobx';
import { Uploader } from '@/models/auth';
import { Object } from 'leancloud-storage';

class ImageStore {
  filename = '';
  file: FileList | null = null;
  isUploading = false;
  serverFile: Object | null = null;
  constructor () {
    makeObservable(this, {
      filename: observable,
      file: observable,
      isUploading: observable,
      serverFile: observable,
      setFile: action,
      setFilename: action,
      upload: action
    })
  }

  setFilename (newFilename: string) {
    this.filename = newFilename
  }

  setFile (newFile: FileList) {
    this.file = newFile
  }

  upload () {
    this.isUploading = true
    return new Promise((resolve, reject) => {
      Uploader.add(this.file, this.filename).then((serverFile) => {
        // @ts-ignore
        this.serverFile = serverFile
        resolve(serverFile)
      }).catch((error) => {
        reject(error)
      }).finally(() => {
        this.isUploading = false
      })
    })
  }
}

export default new ImageStore();