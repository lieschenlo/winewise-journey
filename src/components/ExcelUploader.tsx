
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, File, Check, AlertCircle } from "lucide-react";
import * as XLSX from "xlsx";
import { toast } from "@/components/ui/use-toast";

interface ExcelUploaderProps {
  onUploadSuccess: (data: { question: string; answer: string }[]) => void;
}

const ExcelUploader = ({ onUploadSuccess }: ExcelUploaderProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError(null);
      setIsSuccess(false);
    }
  };

  const processExcel = async () => {
    if (!file) {
      setError("Please select a file first");
      return;
    }

    try {
      setIsUploading(true);
      setError(null);

      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data);
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      // Validate that the Excel file has the required columns
      const hasRequiredColumns = jsonData.length > 0 && 
        Object.keys(jsonData[0] as object).some(key => key.toLowerCase().includes('question')) && 
        Object.keys(jsonData[0] as object).some(key => key.toLowerCase().includes('answer'));

      if (!hasRequiredColumns) {
        setError("Your Excel file must contain 'question' and 'answer' columns");
        setIsUploading(false);
        return;
      }

      // Transform data to match expected format
      const questionKey = Object.keys(jsonData[0] as object).find(key => 
        key.toLowerCase().includes('question')) || '';
      const answerKey = Object.keys(jsonData[0] as object).find(key => 
        key.toLowerCase().includes('answer')) || '';
      
      const formattedData = jsonData.map((row: any) => ({
        question: row[questionKey]?.toString() || '',
        answer: row[answerKey]?.toString() || ''
      }));

      // Filter out any rows with empty questions or answers
      const validData = formattedData.filter(item => item.question && item.answer);

      if (validData.length === 0) {
        setError("No valid flashcard data found in the file");
        setIsUploading(false);
        return;
      }

      onUploadSuccess(validData);
      setIsSuccess(true);
      setIsUploading(false);

    } catch (err) {
      console.error("Error processing Excel file:", err);
      setError("Error processing your file. Please ensure it's a valid Excel file.");
      setIsUploading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-4">
        <label 
          htmlFor="excel-upload" 
          className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors"
        >
          <div className="flex flex-col items-center">
            <Upload className="h-10 w-10 text-gray-400 mb-2" />
            <span className="text-gray-600 mb-1">Drop your Excel file here, or click to browse</span>
            <span className="text-xs text-gray-500">Supports .xlsx and .xls files</span>
          </div>
          <input 
            id="excel-upload" 
            type="file" 
            accept=".xlsx, .xls" 
            className="hidden" 
            onChange={handleFileChange}
          />
        </label>
      </div>

      {file && (
        <div className="flex items-center gap-2 p-3 bg-cream-100/50 rounded-md mb-4">
          <File className="h-5 w-5 text-wine-600" />
          <span className="text-sm text-gray-700 truncate flex-1">{file.name}</span>
          <span className="text-xs text-gray-500">{(file.size / 1024).toFixed(0)} KB</span>
        </div>
      )}

      {error && (
        <div className="p-3 bg-red-50 text-red-700 rounded-md flex items-start gap-2 mb-4">
          <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      {isSuccess && (
        <div className="p-3 bg-green-50 text-green-700 rounded-md flex items-start gap-2 mb-4">
          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm">File uploaded and processed successfully!</p>
        </div>
      )}

      <Button 
        onClick={processExcel} 
        disabled={!file || isUploading}
        className="w-full bg-wine-600 hover:bg-wine-700 text-white"
      >
        {isUploading ? "Processing..." : "Upload and Process File"}
      </Button>

      <div className="mt-4 text-xs text-center text-gray-500">
        <p>Your file should have columns named "Question" and "Answer"</p>
        <p>Sample format: <a href="#" className="text-wine-600 hover:underline">Download Template</a></p>
      </div>
    </div>
  );
};

export default ExcelUploader;
