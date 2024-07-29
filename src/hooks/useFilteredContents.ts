import { useMemo } from 'react';
import { Content } from '../types';

//Hook to filter contents based on search term, current category and current media type
const useFilteredContents = (contents: Content[], searchTerm: string, currentCategory: string, currentMediaType: string): Content[] => {
  return useMemo(() => {
    //Function to filter contents by search term
    const filterContentsBySearch = (contents: Content[]): Content[] => {
      if (!searchTerm) return contents;
      return contents.filter(content =>
        content.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (content.article && (
          content.article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          content.article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          content.article.author.toLowerCase().includes(searchTerm.toLowerCase())
        )) ||
        (content.book && (
          content.book.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          content.book.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          content.book.author.toLowerCase().includes(searchTerm.toLowerCase())
        )) ||
        (content.video && (
          content.video.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          content.video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          content.video.channel.toLowerCase().includes(searchTerm.toLowerCase())
        ))
      );
    };

    //Function to filter conents by category
    const filterContentsByCategory = (contents: Content[]): Content[] => {
      if (currentCategory === 'All') return contents;
      return contents.filter(content => content.category.includes(currentCategory));
    };

    //Function to filter contents by media type
    const filterContentByMediaType = (contents: Content[]): Content[] => {
      if (currentMediaType === 'All') return contents;
      return contents.filter(content => content.type === currentMediaType);
    };

    // First filter contents by category
    const filteredByCategory = filterContentsByCategory(contents);
    // Then filter the already category-filtered content by media type
    const filteredByMediaType = filterContentByMediaType(filteredByCategory);
    // Finally, filter the already media type-filtered content by search term
    const filteredBySearch= filterContentsBySearch(filteredByMediaType);

    //add isHighlightedCategory to each content item
    const highlightContents= filteredBySearch.map(content => ({
      ...content,
      isHighlightedCategory: currentCategory !== 'All' && content.category.includes(currentCategory),
    }));

    return highlightContents;
  }, [contents, searchTerm, currentCategory, currentMediaType]); //Dependencies array for useMemo
};

export default useFilteredContents;
