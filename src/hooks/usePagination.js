import { useMemo } from 'react'
const DOTS = '...'
const range = (start, end) => {
  let length = end - start + 1
  return Array.from({ length }, (_, index) => index + start)
}
export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
  totalPages
}) => {
  const paginationRange = useMemo(() => {
    const totalPageNumber = siblingCount + 5
    if (totalPageNumber >= totalPages) return range(1, totalPages)
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages)
    const isShowLeftDots = leftSiblingIndex > 1
    const isShowRightDots = rightSiblingIndex < totalPages
    const firstPageIndex = 1
    const lastPageIndex = totalPages
    if (!isShowLeftDots && isShowRightDots) {
      let leftItemCount = siblingCount + 2 * siblingCount
      let leftRange = range(1, leftItemCount)

      return [...leftRange, DOTS, totalPages]
    }

    if (isShowLeftDots && !isShowRightDots) {
      let rightItemCount = siblingCount + 2 * siblingCount
      let rightRange = range(totalPages - rightItemCount + 1, totalPages)
      return [firstPageIndex, DOTS, ...rightRange]
    }

    if (isShowLeftDots && isShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex)
      return [
        firstPageIndex,
        firstPageIndex + 1,
        DOTS,
        ...middleRange,
        DOTS,
        lastPageIndex - 1,
        lastPageIndex
      ]
    }
  }, [siblingCount, currentPage, totalPages])

  return paginationRange
}
