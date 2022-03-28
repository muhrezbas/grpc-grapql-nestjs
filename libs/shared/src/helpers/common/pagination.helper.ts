export const createPaginationOptions = (payload) => {
  let page = parseInt(payload.page, 10) || 1;
  let take = parseInt(payload.perPage, 10) || 20;

  const pagination = new PaginationOptions();
  if (page <= 0) {
    page = 1;
  }
  if (take <= 0) {
    take = 20;
  }

  pagination.page = page;
  pagination.take = take;
  pagination.skip = (page - 1) * take;

  return pagination;
};

export class PaginationOptions {
  skip: number;
  page: number;
  take: number;
}
