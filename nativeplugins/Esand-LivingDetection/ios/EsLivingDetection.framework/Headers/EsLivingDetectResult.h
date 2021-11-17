//
//  EsLivingDetectResult.h
//  EsLivingDetection
//
//  Created by ReidLee on 2021/1/6.
//
#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

/**
 * 错误码枚举
 */
typedef enum  EsLivingDetectErrorCode {
    /**
     * 活体检测成功
     */
    ELD_SUCCESS,
    /**
     * 活体检测失败
     */
    ELD_FAILED,
    /**
     * 参数异常
     */
    ELD_PARAME_ERROR,
    /**
     * 发生异常
     */
    ELD_EXCEPTION,
    /**
     * 执行超时
     */
    ELD_TIMEOUT,
    /**
     * 无法获取权限
     */
    ELD_PERMISSION,
    /**
     * 不支持
     */
    ELD_UNSUPPORT,
    /**
     * 主动退出
     */
    ELD_CANCEL,
} EsLivingDetectErrorCode;

/**
 * 回调结果
 */
@interface EsLivingDetectResult : NSObject

/**
 * 执行结果码
 */
@property  (nonatomic) EsLivingDetectErrorCode code;
/**
 * 执行结果描述
 */
@property  (nonatomic, copy) NSString* msg;
/**
 * 认证TOKEN
 */
@property  (nonatomic, copy) NSString* token;
/**
 * 操作结果数据
 */
@property  (nonatomic, copy) NSString* data;

- (void) initWithCode:(EsLivingDetectErrorCode) code msg: (NSString*) msg data:(NSString*) data;
/**
 * 转换成json字符串
 */
- (NSString*) toJson;

/*
 * 获取code的字符串
 */
- (NSString*) getCodeStr;

@end

/**
 * 执行结果回调
 */
typedef void (^EsLivingDetectCallback)(EsLivingDetectResult* _Nonnull result);

NS_ASSUME_NONNULL_END
