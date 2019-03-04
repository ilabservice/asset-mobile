/**
 * tabs选项卡组件
 */
import React, {PureComponent} from 'react'
import {
    View, StyleSheet, Image, TouchableOpacity, Text
} from 'react-native'

import type {
    ViewStyleProp,
    TextStyleProp,
} from 'react-native/Libraries/StyleSheet/StyleSheet'

type Props = {
    tabStyle: ViewStyleProp,
    activeTabStyle: ViewStyleProp,
    tabTextStyle: TextStyleProp,
    activeTabTextStyle: TextStyleProp,
    tabBadgeContainerStyle: TextStyleProp,
    activeTabBadgeContainerStyle: TextStyleProp,
    tabBadgeStyle: TextStyleProp,
    activeTabBadgeStyle: TextStyleProp,
    onTabPress: Function,
    textNumberOfLines: number,
    allowFontScaling: boolean,
    accessible: boolean,
    activeTabOpacity: number,
    enabled: boolean,
    values: string[],
    badges: string[],
    multiple: boolean,
    selectedIndex: number,
    selectedIndices: number[],
    tabsContainerStyle: ViewStyleProp,
    tabsContainerDisableStyle: ViewStyleProp,
    borderRadius: number,
    accessibilityLabels: string[],


    isTabActive?: boolean,
    index?: number,
    badge?: any,
    text: string,
    firstTabStyle?: ViewStyleProp,
    lastTabStyle?: ViewStyleProp,
    tabStyle?: ViewStyleProp,
    activeTabStyle?: ViewStyleProp,
    tabTextStyle?: TextStyleProp,
    activeTabTextStyle?: TextStyleProp,
    tabBadgeContainerStyle?: TextStyleProp,
    activeTabBadgeContainerStyle?: TextStyleProp,
    tabBadgeStyle?: TextStyleProp,
    activeTabBadgeStyle?: TextStyleProp,
    onTabPress: Function,
    textNumberOfLines?: number,
    allowFontScaling?: boolean,
    accessible?: boolean,
    activeTabOpacity?: number,
    accessibilityLabel?: string,
    enabled?: boolean,
}

const handleTabPress = (
    index: number,
    multiple: boolean,
    selectedIndex: number,
    onTabPress: Function,
) => {
    if (multiple) {
        onTabPress(index)
    } else if (selectedIndex !== index) {
        onTabPress(index)
    }
}

const getAccessibilityLabelByIndex = (
    accessibilityLabels: string[],
    index: number,
) => (accessibilityLabels
&& accessibilityLabels.length > 0
&& accessibilityLabels[index]
    ? accessibilityLabels[index]
    : undefined)

class SegmentedControlTab extends PureComponent<Props> {
    static defaultProps = {};

    static defaultProps = {
        values: ['One', 'Two', 'Three'],
        accessible: true,
        accessibilityLabels: [],
        badges: ['', '', ''],
        multiple: false,
        selectedIndex: 0,
        selectedIndices: [0],
        onTabPress: () => {
        },
        tabsContainerStyle: {},
        tabsContainerDisableStyle: {opacity: 0.6},
        tabStyle: {},
        activeTabStyle: {},
        tabTextStyle: {},
        activeTabTextStyle: {},
        tabBadgeContainerStyle: {},
        activeTabBadgeContainerStyle: {},
        tabBadgeStyle: {},
        activeTabBadgeStyle: {},
        borderRadius: 5,
        textNumberOfLines: 1,
        allowFontScaling: true,
        activeTabOpacity: 1,
        enabled: true,
    };


    render() {
        const {
            multiple,
            selectedIndex,
            selectedIndices,
            values,
            badges,
            borderRadius,
            tabsContainerStyle,
            tabsContainerDisableStyle,
            tabStyle,
            activeTabStyle,
            tabTextStyle,
            activeTabTextStyle,
            tabBadgeContainerStyle,
            activeTabBadgeContainerStyle,
            tabBadgeStyle,
            activeTabBadgeStyle,
            onTabPress,
            textNumberOfLines,
            allowFontScaling,
            accessible,
            accessibilityLabels,
            activeTabOpacity,
            enabled,
        } = this.props
        const firstTabStyle = [
            {
                borderRightWidth: values && values.length === 2 ? 1 : 0,
                borderTopLeftRadius: borderRadius,
                borderBottomLeftRadius: borderRadius,
            },
        ]
        const lastTabStyle = [
            {
                borderLeftWidth: 0,
                borderTopRightRadius: borderRadius,
                borderBottomRightRadius: borderRadius,
            },
        ]

        const tabsContainerStyles = [styles.tabsContainerStyle, tabsContainerStyle]
        if (!enabled) {
            tabsContainerStyles.push(tabsContainerDisableStyle)
        }
        return (
            <View style={tabsContainerStyles} removeClippedSubviews={false}>
                {values && values.map((item, index) => {
                    const accessibilityText = getAccessibilityLabelByIndex(
                        accessibilityLabels,
                        index,
                    )
                    return (
                        <TabOption
                            key={item}
                            index={index}
                            badge={badges && badges[index] ? badges[index] : false}
                            isTabActive={
                                multiple
                                    ? selectedIndices.includes(index)
                                    : selectedIndex === index
                            }
                            text={item}
                            textNumberOfLines={textNumberOfLines}
                            onTabPress={indexs => handleTabPress(indexs, multiple, selectedIndex, onTabPress)
                            }
                            firstTabStyle={
                                index === 0 ? [{borderRightWidth: 0}, firstTabStyle] : {}
                            }
                            lastTabStyle={
                                index === values.length - 1
                                    ? [{borderLeftWidth: 0}, lastTabStyle]
                                    : {}
                            }
                            tabStyle={[
                                tabStyle,
                                index !== 0 && index !== values.length - 1
                                    ? {marginLeft: -1}
                                    : {},
                            ]}
                            activeTabStyle={activeTabStyle}
                            tabTextStyle={tabTextStyle}
                            activeTabTextStyle={activeTabTextStyle}
                            tabBadgeContainerStyle={tabBadgeContainerStyle}
                            activeTabBadgeContainerStyle={activeTabBadgeContainerStyle}
                            tabBadgeStyle={tabBadgeStyle}
                            activeTabBadgeStyle={activeTabBadgeStyle}
                            allowFontScaling={allowFontScaling}
                            activeTabOpacity={activeTabOpacity}
                            accessible={accessible}
                            accessibilityLabel={accessibilityText || item}
                            enabled={enabled}
                        />
                    )
                })}
            </View>
        )
    }
}

class TabOption extends PureComponent<Props> {
    static defaultProps = {
        isTabActive: false,
        index: 0,
        badge: '',
        firstTabStyle: {},
        lastTabStyle: {},
        tabStyle: {},
        activeTabStyle: {},
        tabTextStyle: {},
        activeTabTextStyle: {},
        tabBadgeContainerStyle: {},
        activeTabBadgeContainerStyle: {},
        tabBadgeStyle: {},
        activeTabBadgeStyle: {},
        textNumberOfLines: 1,
        allowFontScaling: false,
        accessible: true,
        activeTabOpacity: 1,
        accessibilityLabel: '',
        enabled: false,
        onTabPress: () => {
        },
    };

    render() {
        const {
            isTabActive,
            index,
            badge,
            text,
            firstTabStyle,
            lastTabStyle,
            tabStyle,
            activeTabStyle,
            tabTextStyle,
            activeTabTextStyle,
            tabBadgeContainerStyle,
            activeTabBadgeContainerStyle,
            tabBadgeStyle,
            activeTabBadgeStyle,
            onTabPress,
            textNumberOfLines,
            allowFontScaling,
            accessible,
            activeTabOpacity,
            accessibilityLabel,
            enabled,
        } = this.props
        return (
            <TouchableOpacity
                style={[
                    styles.tabStyletab,
                    tabStyle,
                    isTabActive ? [styles.activeTabStyle, activeTabStyle] : {},
                    firstTabStyle,
                    lastTabStyle,
                ]}
                accessible={accessible}
                accessibilityLabel={accessibilityLabel}
                accessibilityTraits={isTabActive ? 'selected' : 'button'}
                accessibilityComponentType="button"
                onPress={() => onTabPress(index)}
                disabled={!enabled}
                activeOpacity={activeTabOpacity}
            >
                <View style={{flexDirection: 'row'}}>
                    <Text
                        style={[
                            styles.tabTextStyle,
                            tabTextStyle,
                            isTabActive
                                ? [styles.activeTabTextStyle, activeTabTextStyle]
                                : {},
                        ]}
                        numberOfLines={textNumberOfLines}
                        allowFontScaling={allowFontScaling}
                        ellipsizeMode="tail"
                    >
                        {text}
                    </Text>
                    {Boolean(badge) && (
                        <View
                            style={[
                                styles.tabBadgeContainerStyle,
                                tabBadgeContainerStyle,
                                isTabActive
                                    ? [
                                        styles.activeTabBadgeContainerStyle,
                                        activeTabBadgeContainerStyle,
                                    ]
                                    : {},
                            ]}
                        >
                            <Text
                                style={[
                                    styles.tabBadgeStyle,
                                    tabBadgeStyle,
                                    isTabActive
                                        ? [styles.activeTabBadgeStyle, activeTabBadgeStyle]
                                        : {},
                                ]}
                                allowFontScaling={allowFontScaling}
                            >
                                {badge}
                            </Text>
                        </View>
                    )}
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    tabsContainerStyle: {
        // backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    tabStyle: {
        paddingVertical: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#0076FF',
        borderWidth: 1,
        // backgroundColor: 'white',
    },

    tabStyletab: {
        paddingVertical: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#0076FF',
        borderWidth: 1,
        // backgroundColor: 'white',
    },
    activeTabStyle: {
        backgroundColor: '#0076FF',
    },
    tabTextStyle: {
        color: '#0076FF',
    },
    activeTabTextStyle: {
        color: 'white',
    },
    tabBadgeContainerStyle: {
        borderRadius: 20,
        // backgroundColor: 'red',
        paddingLeft: 5,
        paddingRight: 5,
        marginLeft: 5,
        marginBottom: 3,
    },
    activeTabBadgeContainerStyle: {
        backgroundColor: 'white',
    },
    tabBadgeStyle: {
        color: 'white',
        fontSize: 11,
        fontWeight: 'bold',
    },
    activeTabBadgeStyle: {
        color: 'black',
    },
})
module.exports = SegmentedControlTab;
