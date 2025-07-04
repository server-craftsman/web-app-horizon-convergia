import {BaseService} from "@app/api/base.service.ts";
import type {ApiResponse} from "@app/interface/apiResponse.interface.ts";
// @ts-ignore
import type {CreateCategory} from "@types/category/Category.req.type";
// @ts-ignore
import type {CategoryResponse} from "@types/category/Category.res.type";
import {API_PATH} from "@consts/api.path.const";

export const CategoryService = {
    createCategory(params: CreateCategory) {
        return BaseService.post<ApiResponse<CategoryResponse>>({
            url: API_PATH.CATEGORY.CREATE,
            payload: params
        });
    },

    getCategories() {
        return BaseService.get<CategoryResponse[]>({
            url: API_PATH.CATEGORY.GET_ALL
        });
    },
    getCategory(id: string) {
        return BaseService.get<CategoryResponse>({
            url: API_PATH.CATEGORY.GET_BY_ID(id)
        });
    },

    updateCategory(id: string, params: CreateCategory) {
        return BaseService.put<ApiResponse<CategoryResponse>>({
            url: API_PATH.CATEGORY.UPDATE(id),
            payload: params
        });
    },

    deleteCategory(id: string) {
        return BaseService.remove<ApiResponse<any>>({
            url: API_PATH.CATEGORY.DELETE(id)
        });
    }
};