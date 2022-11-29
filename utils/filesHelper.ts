export enum FileType {
  PNG = 'image/png',
  JPG = 'image/jpg',
  JPEG = 'image/jpeg',
  PDF = 'application/pdf',
  GIF = 'image/gif',
}

type ValidationResult = {
  status: 'success' | 'error';
  message?: string;
};

export function getFilesArray(fileList: FileList): File[] {
  const files: File[] = [];

  for (let i = 0; i < fileList.length; i++) {
    const file = fileList.item(i);
    if (file) {
      files.push(file);
    }
  }
  return files;
}

export function checkFileSize(file: File, maxSize: number): ValidationResult {
  if (file.size > maxSize) {
    const maxMbSize = file.size / 1024 / 1024 / 8;
    return {
      status: 'error',
      message: `Вес файла не должен быть больше ${maxMbSize}`,
    };
  }
  return {
    status: 'success',
  };
}

export function checkFileType(file: File, permittedTypes: FileType[]): ValidationResult {
  if (!permittedTypes.includes(file.type as FileType)) {
    return {
      status: 'error',
      message: `Неверный формат файла. Разрешенные форматы: ${permittedTypes.join(', ')}`,
    };
  }
  return {
    status: 'success',
  };
}

export function getFileMbSize(file: File) {
  return Math.floor(file.size / 8 / 1024);
}

export function getFileType(file: File) {
  return file.type.split('/')[1];
}
