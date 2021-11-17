#import <Foundation/Foundation.h>
#import "weexHeader/WeexSDK.h"
#import "EsLivingDetectResult.h"

NS_ASSUME_NONNULL_BEGIN

@interface EsLivingDetectionModule : NSObject <WXModuleProtocol>

/**
 * 认证初始化
 * @param options 入参
 * @return EsLivingDetectResult
 */
- (EsLivingDetectResult*)verifyInit:(NSDictionary *) options;
/**
 * 发起活体检测
 * @param options 入参
 * @param callback 回调函数
 */
- (void)startLivingDetect:(NSDictionary *) options callback:(WXModuleKeepAliveCallback)callback;
@end

NS_ASSUME_NONNULL_END
