import type { FileType } from '@packages/types/data';

export const isImage = (data?: FileType) => {
   return data?.type?.toLowerCase().includes('image');
};

export const isVideo = (data?: FileType) => {
   return data?.type?.toLowerCase().includes('video');
};

export const fileIcon = (data?: FileType) => {
   if (!data?.type) {
      return '📄';
   }

   const type = data.type.toLowerCase();

   if (type.includes('image')) {
      return '🖼️';
   }

   if (type.includes('video')) {
      return '🎞️';
   }

   if (type.includes('audio')) {
      return '🎧';
   }

   if (type.includes('pdf')) {
      return '📕';
   }

   if (type.includes('zip') || type.includes('rar')) {
      return '🗜️';
   }

   if (type.includes('excel') || type.includes('spreadsheet')) {
      return '📊';
   }

   if (type.includes('word')) {
      return '📄';
   }

   if (type.includes('powerpoint') || type.includes('presentation')) {
      return '📽️';
   }
   if (type.includes('text') || type.includes('plain')) {
      return '📃';
   }
   if (type.includes('json') || type.includes('xml')) {
      return '🧾';
   }
   if (
      type.includes('code') ||
      type.includes('javascript') ||
      type.includes('typescript')
   ) {
      return '💻';
   }

   return '📁';
};

export const formatBytes = (bytes = 0) => {
   if (bytes === 0) {
      return '0 Bytes';
   }

   const k = 1024;
   const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
   const i = Math.floor(Math.log(bytes) / Math.log(k));
   const size = Number.parseFloat((bytes / k ** i).toFixed(2));

   return `${size} ${sizes[i]}`;
};
