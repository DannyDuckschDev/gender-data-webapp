import { useMemo } from 'react';
import { Content } from '../types';

const useFilteredContents = (contents: Content[], searchTerm: string, currentCategory: string): Content[] => {
  return useMemo(() => {
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

    const filterContentsByCategory = (contents: Content[]): Content[] => {
      if (currentCategory === 'All') {
        return contents;
      }
      return contents.filter(content => content.category.includes(currentCategory));
    };

    const filteredByCategory = filterContentsByCategory(contents);
    const filteredBySearch = filterContentsBySearch(filteredByCategory);

    return filteredBySearch;
  }, [contents, searchTerm, currentCategory]);
};

export default useFilteredContents;
