import { useDropzone } from 'react-dropzone';

const MyUploader = () => {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone();

  return (
    <div {...getRootProps()} className="p-4 border-dashed border-2 border-blue-400 cursor-pointer">
      <input {...getInputProps()} multiple />
      <p>Drag & drop files here, or click to browse</p>
      <ul>
        {acceptedFiles.map((file, i) => (
          <li key={i}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyUploader;