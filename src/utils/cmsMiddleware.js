export const fetchCmsData = async (path) => {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error('CMS 데이터를 불러오는데 실패했습니다');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('CMS 데이터 로드 에러:', error);
    return null;
  }
}; 