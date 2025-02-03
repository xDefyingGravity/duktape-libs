#include "preload.h"

inline duk_ret_t console_log(duk_context *ctx) {
    int nargs = duk_get_top(ctx);

    for (int i = 0; i < nargs; i++) {
        printf("%s ", duk_safe_to_string(ctx, i));
    }
    printf("\n");

    return 0;
}

inline duk_ret_t console_error(duk_context *ctx) {
    int nargs = duk_get_top(ctx);

    for (int i = 0; i < nargs; i++) {
        fprintf(stderr, "%s ", duk_safe_to_string(ctx, i));
    }
    printf("\n");

    return 0;
}

void register_console_functions(duk_context *ctx) {
    duk_push_c_function(ctx, console_log, DUK_VARARGS);
    duk_put_global_string(ctx, "print");

    duk_push_c_function(ctx, console_error, DUK_VARARGS);
    duk_put_global_string(ctx, "error");
}
