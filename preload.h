#pragma once
#include "duktape.h"
#include <stdarg.h>
#include <stdio.h>

duk_ret_t console_log(duk_context *ctx);
duk_ret_t console_error(duk_context *ctx);
void register_console_functions(duk_context *ctx);
