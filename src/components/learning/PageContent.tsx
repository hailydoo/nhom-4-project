
import { Page as PageType } from "@/types";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PageContentProps {
  page: PageType;
  onNextPage: () => void;
  onPrevPage: () => void;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export function PageContent({
  page,
  onNextPage,
  onPrevPage,
  hasNextPage,
  hasPrevPage
}: PageContentProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-auto p-6">
        {page.page_type === 'text' && (
          <div 
            className="prose prose-blue max-w-none"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        )}
        
        {page.page_type === 'video' && (
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={page.content}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0 rounded-lg shadow-lg"
            ></iframe>
          </div>
        )}
      </div>
      
      <div className="border-t p-4 flex justify-between">
        <Button 
          variant="outline"
          onClick={onPrevPage}
          disabled={!hasPrevPage}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
        
        <Button 
          onClick={onNextPage}
          disabled={!hasNextPage}
        >
          Next
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
